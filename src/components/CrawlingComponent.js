import * as React from 'react';
import UserService from '../services/ApiService';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class CrawlingComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            crawling:[]
        }
    }

    componentDidMount(){
        UserService.getCrawling().then((response) => {
            this.setState({crawling: response.data})
        });
    }

    render (){
        return(
//            <div>
//                <h1 className = "text-center"> Crawling List </h1>
//                <table className = "table table-striped">
//                    <TableHead>
//                        <tr>
//                            <td> idx </td>
//                            <td> word </td>
//                            <td> count </td>
//                        </tr>
//                    </TableHead>
//                    <TableBody>
//                        {this.state.crawling.map(
//                            crawling =>
//                            <tr key = {crawling.idx}>
//                                <td> {crawling.idx}</td>
//                                <td> {crawling.word}</td>
//                                <td> {crawling.count}</td>
//                            </tr>
//                        )}
//                    </TableBody>
//                </table>
//            </div>
              <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell> idx </TableCell>
                        <TableCell align="right">word</TableCell>
                        <TableCell align="right">count</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.crawling.map(
                        crawling =>
                        <TableRow
                          key={crawling.idx}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {crawling.idx}
                          </TableCell>
                          <TableCell align="right">{crawling.word}</TableCell>
                          <TableCell align="right">{crawling.count}</TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
        )
    }
}

export default CrawlingComponent