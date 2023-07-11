/** @jsxImportSource theme-ui */

import { Container, Image } from "theme-ui";
import toUpperCase from "../../libs/toUpperCase";
import toCapitalize from "../../libs/toCapitalize";

const MemberCard = (props) => {
  const { fullName, des, role, rank, image } = props;
  return (
    <div sx={{ variant: "member.card" }} className="members__card">
      <div sx={{ variant: "member.card.header" }} className="members__card-header">
        <Image alt={fullName} src={image} />
      </div>
      <div sx={{ variant: "member.card.body" }} className="members__card-body">
        <h4 sx={{variant: "member.card.role"}}>{toCapitalize(role)} {rank && <span sx={{variant: "member.card.rank"}}>/ {toUpperCase(rank)}</span>}</h4>
        <h2 sx={{variant: "member.card.name"}}>{toCapitalize(fullName)}</h2>
        <p sx={{variant: 'member.card.des'}}>{des}</p>
      </div>
    </div>
  );
};

const Members = ({ data }) => {
  return (
    <section sx={{ variant: 'member' }} className="members">
      <div sx={{ variant: 'member.wrapper' }} className="members__wrapper">
        <div sx={{ variant: 'member.list' }} className="members__list">
          {
            data.map((member, index) => {
              const { fullName, des, role, rank, image } = member;
              return (
                <MemberCard key={index} fullName={fullName} des={des} role={role} rank={rank} image={image} />
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Members;
