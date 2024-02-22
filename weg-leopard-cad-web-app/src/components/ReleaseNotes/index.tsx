import React, { useState, useEffect } from "react";
import { fetchReleaseNotes } from "../../backend/axios/AxiosFuncs";
import { ReleaseNote } from "../../frontend/models/ReleaseNote";
import { GlobalTable } from "../../frontend/styles/GlobalStyles";

const ReleaseNotes: React.FC = () => {
  const [releaseNotes, setReleaseNotes] = useState<ReleaseNote[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const notes = await fetchReleaseNotes();
        setReleaseNotes(notes);
      } catch (error) {
        console.error("Error fetching release notes:", error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <>
      <h2>Release Notes</h2>
      <GlobalTable variant="dark">
        <thead>
          <tr>
            <th>Version</th>
            <th>Main Changes</th>
          </tr>
        </thead>
        <tbody>
          {releaseNotes.map((releaseNote, index) => (
            <tr key={index}>
              <td>{releaseNote.version}</td>
              <td>
                <ul>
                  {releaseNote.mainChanges.map((change, index) => (
                    <li key={index}>{change}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </GlobalTable>
    </>
  );
};

export default ReleaseNotes;
