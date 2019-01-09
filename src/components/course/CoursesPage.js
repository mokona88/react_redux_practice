import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from "../../actions/CourseActions";
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.state = {
    //   course: { title: "" }
    // };

    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
  }

  // onTitleChange(event) {
  //   const course = this.state.course;
  //   course.title = event.target.value;
  //   this.setState({course: course});
  // }
  //
  // onClickSave() {
  //   // this.props.dispatch(courseActions.createCourse(this.state.course));
  //   // this.props.createCourse(this.state.course);
  //   this.props.actions.createCourse(this.state.course);
  // }

  // courseRow(course, indx) {
  //   return <div key={indx}>{course.title}</div>;
  // }

  render () {
    const { courses } = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses}/>
        {/*{this.props.courses.map(this.courseRow)}*/}
        {/*<h2>Add Course</h2>*/}
        {/*<input type="text" onChange={this.onTitleChange} value={this.state.course.title} />*/}
        {/*<input type="submit" value="Save" onClick={this.onClickSave}/>*/}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // createCourse: PropTypes.func.isRequired
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses // reference to courseReducer > courses (action.courses)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course)), // method 2
    actions: bindActionCreators(courseActions, dispatch) // method 3
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

// full code
// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateAndProps(CoursesPage);
