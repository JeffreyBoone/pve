import React from 'react';
import { useDrop } from 'react-dnd';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 90,
    left: 'auto',
    position: 'fixed',
    display: ""
};
export const Dustbin = () => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: "item",
        drop: () => ({ name: 'the Dustbin' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });
    const isActive = canDrop && isOver;

    return (
        <Fab ref={drop} style={style} size='large' variant='extended' color="primary" aria-label="add">
            Drag here to delete &nbsp;
            <DeleteIcon />
        </Fab>
    );
};
