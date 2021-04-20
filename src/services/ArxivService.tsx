import Paper from '../types/Paper';

class ArxivService {
    public async queryArxiv(terms: string[]): Promise<Paper[]> {
        var all_results: Paper[] = [];
        for (var i = 0; i < terms.length; i++) {
            var result = await this.querySingleTerm(terms[i]);
            all_results = [
                ...all_results,
                ...result
            ]
        }
        console.log(all_results);
        // shuffle results
        return all_results.sort(() => Math.random() - 0.5);
    }

    private async querySingleTerm(term: string): Promise<Paper[]> {
        var query = term.replaceAll(" ", "\\ ");
        console.log(query);
        var results = await fetch(`http://export.arxiv.org/api/query?search_query=all:${query}`)
            .then(res => res.text())
            .then(
                (result) => {
                    var results = this.parseArxivXML(result);
                    var papers = results.map((entry: any) => {
                        return (
                            {
                                title: entry.filter((val: any) => val.name === "title")[0].value,
                                summary: entry.filter((val: any) => val.name === "summary")[0].value
                            }
                        )
                    })
                    return papers;
                }
            );
        return results;
    }

    private parseArxivXML(response: any): Object[] {
        var XMLParser = require('react-xml-parser');
        var results = new XMLParser().parseFromString(response).children;
        results = results.filter((res: any) => res.name === "entry");
        results = results.map((res: any) => { return res.children });
        return results
    }
}

export default ArxivService;