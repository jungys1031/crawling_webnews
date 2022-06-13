import * as React from 'react';
import UserService from '../services/PoliticService';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class PoliticComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          politic:[]
        }
    }

    componentDidMount(){
        UserService.getPolitic().then((response) => {
            this.setState({politic: response.data})
        });
    }

    render (){
        return(
              <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell> 순위 </TableCell>
                        <TableCell align="right">단어</TableCell>
                        <TableCell align="right">빈도수</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.politic.map(
                        politic =>
                        <TableRow
                          key={politic.idx}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {politic.idx}
                          </TableCell>
                          <TableCell align="right">{politic.word}</TableCell>
                          <TableCell align="right">{politic.count}</TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
        )
    }
}

export default PoliticComponent