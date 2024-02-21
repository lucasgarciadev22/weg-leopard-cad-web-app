import React from 'react';
import { Table } from 'react-bootstrap';

const ReleaseNotes: React.FC = () => {
  return (
    <div>
      <h2>Release Notes</h2>
      <Table variant="dark">
        <thead>
          <tr>
            <th>Version</th>
            <th>Main Changes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>23.0.1 - 23.0.4</td>
            <td>📦 This is the #1 preview for the new SWIG packages. Use it at your own risk.
              <ul>
                <li>New features of highlight</li>
                <li>Reimplementations of several tools</li>
                <li>New minor features for several tools</li>
                <li>Improved overall performance & safety</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>23.0.5</td>
            <td>📦 This is the #2 preview for the new SWIG packages. ⚠️ Use it at your own risk.
              <ul>
                <li>New Table tool</li>
                <li>Bugfix for command line culture parser and submodes</li>
                <li>Reimplemented Properties Palette</li>
                <li>Reimplemented several Views and ViewModels to XAML behaviours (on going task to remove Caliburn)</li>
                <li>Improved overall performance & safety</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ReleaseNotes;
