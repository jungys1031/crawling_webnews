import * as React from 'react';
import UserService from '../services/LifeCultureService';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class LifeCultureComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            lifeCulture:[]
        }
    }

    componentDidMount(){
        UserService.getLifeCulture().then((response) => {
            this.setState({lifeCulture: response.data})
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
                      {this.state.lifeCulture.map(
                        lifeCulture =>
                        <TableRow
                          key={lifeCulture.idx}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {lifeCulture.idx}
                          </TableCell>
                          <TableCell align="right">{lifeCulture.word}</TableCell>
                          <TableCell align="right">{lifeCulture.count}</TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
        )
    }
}

export default LifeCultureComponent
