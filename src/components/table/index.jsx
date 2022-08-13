import React from 'react';

function TableComponent() {
    return (
        <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Tribe name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1.</th>
            <td>Rigas</td>
          </tr>
          <tr>
            <th scope="row">2.</th>
            <td>Billing</td>
          </tr>
          <tr>
            <th scope="row">3.</th>
            <td colspan="2">Internstellar</td>
          </tr>
        </tbody>
      </table>
    )
}

export default TableComponent;