import React from 'react';

const EditExpensePage = (props) =>  {
    return (
        <div>
        This is EditExpensePage for id: {props.match.params.id}
        </div>
    );
};

export default EditExpensePage;