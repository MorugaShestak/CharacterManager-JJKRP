import React from 'react';
import './Table.css';

const Table = ({data}) => {



    return (
        <table className="table table-dark table-striped table-bordered table-custom-border">
            <tr>
                <th>Персонаж</th>
                <th>Игрок</th>
                <th>ОЗ</th>
                <th>ПМ</th>
                <th>CP</th>
                <th>Проклятые Инструменты</th>
            </tr>
        </table>
    );
};

export default Table;