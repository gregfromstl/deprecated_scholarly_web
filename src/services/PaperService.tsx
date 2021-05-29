import Paper from '../types/Paper'

class PaperService {
    public async queryPapers(query: string, start = 0): Promise<Paper> {
        query = query.replaceAll(' ', '\\ ')
        var papers = await fetch(
            `http://127.0.0.1:8000/papers/search?query=${query}&start=${start}`
        )
            .then((res) => res.text())
            .then((text) => JSON.parse(text))
            .then((json) => json.papers)
            .then((papers) => {
                return papers.map((paper: any) => {
                    return {
                        title: paper.title,
                        summary: paper.summary,
                        link: paper.link,
                    }
                })
            })
        return papers
    }
}

export default PaperService
