import React from 'react'
import Paper from '../types/Paper'
import PaperList from './PaperList'
import SearchPanel from './SearchPanel'
import PaperService from '../services/PaperService'

export interface HomePageProps {}

export interface HomePageState {
    query: string
    papers: Paper[]
    invalid_search: boolean
}

class HomePage extends React.Component<HomePageProps, HomePageState> {
    paperService: PaperService

    constructor(props: HomePageProps | Readonly<HomePageProps>) {
        super(props)
        this.state = {
            query: '',
            papers: [],
            invalid_search: false,
        }
        this.paperService = new PaperService()
        this.search = this.search.bind(this)
    }

    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling)
    }

    trackScrolling = () => {
        const wrappedElement = document.getElementById('paper-list')
        if (wrappedElement && this.isBottom(wrappedElement)) {
            this.search(this.state.query, true)
        }
    }

    private isBottom(el: Element) {
        return el.getBoundingClientRect().bottom <= window.innerHeight
    }

    private search(query: string, extend = false) {
        this.paperService
            .queryPapers(query, extend ? this.state.papers.length : 0)
            .then((result: any) => {
                this.setState({
                    query: query,
                    papers: extend ? this.state.papers.concat(result) : result,
                    invalid_search: result.length === 0 ? true : false,
                })
            })
            .catch((err: any) => {
                console.log(err)
                this.setState({
                    invalid_search: true,
                })
            })
    }

    render() {
        return (
            <div className="flex flex-col h-full">
                <SearchPanel search={this.search} />
                <PaperList
                    papers={this.state.papers}
                    invalid={this.state.invalid_search}
                />
            </div>
        )
    }
}

export default HomePage
