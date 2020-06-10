import Link from 'next/link';
import { Button, ButtonGroup } from "react-bootstrap";
import { FaUserCircle, FaBlackTie, FaGraduationCap } from 'react-icons/fa';

export default () => {
  return (
    <div>
      <ButtonGroup className="mb-4">
        <Link href="/edit-profile">
          <Button variant="light">
            <FaUserCircle size="20px" className="text-info mr-2 pb-1" />
          Edit Profile
        </Button>
        </Link>
        <Link href="/add-experience">
          <Button variant="light">
            <FaBlackTie size="20px" className="text-info mr-2 pb-1" />
          Add Experience
        </Button>
        </Link>
        <Link href="/add-education">
          <Button variant="light">
            <FaGraduationCap size="20px" className="text-info mr-2 pb-1" />
          Add Education
        </Button>
        </Link>
      </ButtonGroup>
    </div>
  );
};
