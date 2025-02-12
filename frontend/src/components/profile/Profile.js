import {Button, Flex, Text} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import UserDispatch from "../../redux/dispatchers/UserDispatcher.js";
import {useDispatch, useSelector} from 'react-redux';
import BgImg from '../../assets/images/ProfileBg.jpg';
import OwnerProfile from "./owner/OwnerProfile.js";
import UserProfile from "./user/UserProfile.js";

function Profile() {
    const userDetails = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div style={
            {
                // backgroundImage: `url(${BgImg})`,
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${BgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'auto',
                maxHeight: '100vh',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '2rem',
            }
        }>
            <ProfileNav/>
            {
                userDetails.userType === "owner" ? (<OwnerProfile/>) : (<UserProfile/>)
            }
        </div>
    );
};

function ProfileNav() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={4}
            bg="rgba(0, 0, 0, 0.3)"
        >
            <Text fontSize="xl" fontWeight="bold" onClick={() => {
                navigate("/")
            }} _hover={{cursor: 'pointer'}}>
                LockSpot
            </Text>

            <div>
                <Button colorScheme="red" mr={2} onClick={() => {
                    dispatch(UserDispatch("", 'clear'));
                    navigate("/")
                }}>
                    Log Out
                </Button>
            </div>
        </Flex>
    );
}

export default Profile;