import React from 'react';

import ProfileImage from 'sections/Profile/ProfileImage';
import PhoneModal from 'sections/Profile/PhoneModal';
import Button from 'components/Button';
import Link from 'components/Link';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styled from 'styled-components';

type AttendeeType = 'hacker' | 'organizer' | 'volunteer' | 'sponsor';

type Action = 'check_in' | 'attend_workshop' | 'call_phone';

interface AttendeeProfile {
  id: number;
  name: string;
  profile_pic: string; // a url to an image
  bio?: string; // a paragraph describing the attendee
  type: AttendeeType;
  checked_in: boolean;
  actions: Action[];
  num_workshops_attended?: number; // all "hacker" type attendees (and no other types) will have this field
  sponsor_company?: string; // all "sponsor" type attendees (and no other types) will have this field
  sponsor_company_link?: string; // all "sponsor" type attendees (and no other types) will have this field
  next_shift?: number; // datetime (ms); all "volunteer" type attendees (and no other types) will have this field
  phone_number?: string; // all "organizer" type attendees (and no other types) will have this field
}

type EndpointResponse = AttendeeProfile | null;

const ProfileWrapper = styled.div`
  max-width: 800px;
  margin: auto;
  margin-top: 15px;
  text-align: center;
  padding: 15px;
  border: 1px solid grey;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
`;

const ProfileSection = styled.div`
  margin-bottom: 10px;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const ID = styled(ProfileSection)`
  opacity: 0.75;
`;

const CheckedIn = styled.div`
  color: green;
`;

// capitalizes each word in an action
const capitalizeAction = (act: string) => {
  act = act.replace('_', ' ');
  let str = act.split(' ');

  for (let i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }

  return str.join(' ');
}

// Profile for any given attendee (determined by type)
class Profile extends React.Component<{}, {}> {
  state = {
    id: 0,
    name: '',
    profile_pic: '',
    bio: '',
    type: '',
    checked_in: false,
    actions: [],
    num_workshops_attended: 0,
    sponsor_company: '',
    sponsor_company_link: '',
    next_shift: 0,
    phone_number: '',
    isFetching: true,
    nullProfile: false,
    phone: false
  }

  componentDidMount() {
    this.loadProfile();
  }

  // fetch from the user API, updating state once received
  loadProfile = () => {
    if (!this.state.isFetching) {
      this.setState({ isFetching: true })
    }
    fetch('https://hackthenorth.netlify.com/api/fe-challenge-attendee').then((results: any) => {
      return results.json();
    }).then((myJson: EndpointResponse) => {
      if (myJson) {
        this.setState({ nullProfile: false })
        this.setState(myJson);
      } else {
        this.setState({ nullProfile: true })
      }
      this.setState({ isFetching: false });
    });
  }

  // checks in the attendee
  checkIn = () => {
    this.setState({ checked_in: true });
  }

  // increases the workshop count for a hacker
  increaseWorkshop = () => {
    this.setState({ num_workshops_attended: this.state.num_workshops_attended + 1 });
  }

  // shows phone modal
  showPhone = () => {
    this.setState({ phone: true });
  }
  // hide phone modal
  hidePhone = () => {
    this.setState({ phone: false });
  }

  render() {
    // Currently fetching
    if (this.state.isFetching) {
      return <>Fetching...</>;
    }
    // No profile found
    if (this.state.nullProfile) {
      return (
        <>
          <Button onClick={this.loadProfile}>Load New Profile</Button>
          <div>ERROR: no profile found. Please try again</div>
        </>
      );
    }

    const { id, name, profile_pic, bio, type, checked_in, actions, num_workshops_attended, sponsor_company, sponsor_company_link, next_shift, phone_number } = this.state;
    const date = new Date(next_shift); // converts date in ms to readable date
    // corresponds each Action type with it's corresponding method
    const actionList: any = {
      check_in: this.checkIn,
      attend_workshop: this.increaseWorkshop,
      call_phone: this.showPhone
    };

    return (
      <>
        <Button onClick={this.loadProfile}>Load New Profile</Button>
        <ProfileWrapper>
          <ProfileImage src={profile_pic} type={type} />
          <Name>{name}</Name>
          <ID>{'ID: ' + id}</ID>
          {type === 'hacker' && (
            <ProfileSection>
              {bio}
            </ProfileSection>
          )}
          {type === 'sponsor' && (
            <ProfileSection>
              <Link href={sponsor_company_link}>{sponsor_company}</Link>
            </ProfileSection>
          )}
          {type === 'volunteer' && (
            <ProfileSection>
              Next Shift:
             <div>
                {date.toString()}
              </div>
            </ProfileSection>
          )}
          <Row id="actions">
            {actions.map((act: string) =>
              <Col key={act}>
                <Button onClick={actionList[act]} disabled={act === 'check_in' && checked_in}>
                  {capitalizeAction(act)}
                </Button>
                {act === 'check_in' && checked_in && <CheckedIn>Checked in</CheckedIn>}
                {act === 'attend_workshop' && <div>Has attended: {num_workshops_attended}</div>}
                {act === 'call_phone' && <PhoneModal phone={this.state.phone} hidePhone={this.hidePhone} phone_number={phone_number} />}
              </Col>
            )}
          </Row>
        </ProfileWrapper>
      </>
    );
  }
}

export default Profile;
