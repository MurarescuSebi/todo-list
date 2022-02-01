import * as React from 'react';
import { TodoStyle } from './TodoList.style';
import { connect } from 'react-redux';
import { AppStateType } from '../../common/state/CreateStore';
import { fetchDepartmentsThunk } from '../../common/state/thunks/employee.thunks';
import { EmployeesType } from '../../common/models/profile/general-profile.model';

interface TodoProps {
    fetchDepartmentsThunk: () => void;
    todoList: Array<EmployeesType>;
}

const TodoList: React.FC<TodoProps> = ({
    fetchDepartmentsThunk,
    todoList,
    ...props
}) => {

    React.useEffect(() => {
        fetchDepartmentsThunk();
    }, []);

    return (
        <TodoStyle>
            <div className='section-title'>
                What's the plan for today? :)
            </div>
            <div className='section-container-search'>
                <input 
                    placeholder='hey :)'
                    className="section-search" type="text" id="search" name="search" />
                <div className='section-add'>Add Todo</div>
            </div>

            <div className='section-list'>
                {
                    todoList.map((el,index) => {
                        return (
                            <div className='section-task' key={index}>
                                <div className='section-text'>
                                    {el.text}
                                </div>
                                <div className='section-delete'>
                                    delete
                                </div>
                                <div className='section-edit'>
                                    edit
                                </div>
                            </div>
                        );
                    })
                }
                
            </div>
        </TodoStyle>
    );
}

const mapStateToProps = (state: AppStateType) => ({
    todoList: state?.employees?.employees
});
  
const mapDispatchToProps = {
    fetchDepartmentsThunk: fetchDepartmentsThunk
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);