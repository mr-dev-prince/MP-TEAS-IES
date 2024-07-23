import { committeeMembers } from "../constants/CommitteeMembers";

const CommitteeMembers = () => {
    return (
      <div className="committee-container p-4">
        <h2 className="text-2xl font-bold mb-4">Proposed Technical Program Committee Members</h2>
        <div className="members-list grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {committeeMembers.map((member, index) => (
            <div key={index} className="member-card p-4 border rounded shadow-md">
              {member}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CommitteeMembers;