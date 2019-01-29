import React, { Componentn } from 'react';

import { connect } from 'react-redux';
class LayoutComponent extends Component{

    constructor(props){
        super(props);

        this.getLayoutPage = this.getLayoutPage.bind(this);
    }

    getLayoutPage(){

    }

    render(){
        return (
                <React.Component>
                    { this.getLayoutPage() }
                </React.Component>
            )
    }
}


const mapStateToProps = store => {
    return {

    }
}

const mapDispatcherToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatcherToProps)(LayoutComponent);