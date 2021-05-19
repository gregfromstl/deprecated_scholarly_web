import Paper from '../types/Paper';

class PaperService {
    public async queryPapers(terms: string): Promise<Paper> {
        var query = terms.replaceAll(" ", "\\ ");
        var papers = await fetch(`http://127.0.0.1:8000/papers/search?query=${query}`)
            .then(res => res.text())
            .then(text => JSON.parse(text))
            .then(json => json.papers)
            .then(
                (papers) => {
                    return papers.map((paper: any) => {
                        return (
                            {
                                title: paper.title,
                                summary: paper.summary
                            }
                        )
                    })
                }
            );
        return papers;
    }
}

export default PaperService;