import React, { useState } from 'react'
import userData from "../../data/userData";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Modal from '@material-ui/core/Modal';
import Edit from "./edit";
import Table from "../../component/table";
import DialogMui from "../../component/dialog";
import ModalMui from "../../component/modal";
import Add from "./add";
import "./edit.css";
import {withRouter} from "react-router"



function UserManagement() {

    const [userList, setUserList] = React.useState(userData);
    const [userIndex, setUserIndex] = React.useState('');
    const [userId, setUserId] = useState("");
    const [userFirstName, setuserFirstName] = useState('');
    const [userLastName, setuserLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userGender, setuserGender] = useState('');
    const [userPassword, setuserPassword] = useState('');
    const [open, setOpen] = React.useState(false);
    const [openAdd, setOpenAdd] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [modal, setModal] = useState(false);
    const [filterSearch, setFilterSearch] = React.useState('');


    const toggle = () => setModal(!modal);
    const handleOpen = (id, firstname, lastname, email, gender, password) => {
        setOpen(true);
        setUserId(id)
        setuserFirstName(firstname);
        setuserLastName(lastname);
        setUserEmail(email)
        setuserGender(gender);
        setuserPassword(password);

    }
    const handleClose = () => setOpen(false);
    const handleCloseAdd = () => setOpenAdd(false);
    const handleCloseDialog = () => setOpenDialog(false);



    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
        },
        table: {
            minWidth: 650,
        },
        paper: {
            position: "absolute",
            width: 400,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(4),
            outline: "none"
        },
        input: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
            marginBottom: 10
        }
    }));



    const handleDelete = async (index) => {

        console.log("first", userList);
        let allUserList = [...userList];
        allUserList.splice(userIndex, 1);
        await setUserList(allUserList);
        console.log('second', userList)
        setOpenDialog(false);
        // setOpen(false);
    }


    const handleAvator = (firstname, lastname) => {
        var firstLetter = firstname.charAt(0);
        var secondLetter = lastname.charAt(0);
        var combineLetter = firstLetter + secondLetter;
        console.log(combineLetter);
        var transform = stringColor(combineLetter);
        console.log('transform', transform);
        return <Avatar style={{ background: transform.color, color: "black", fontWeight: "530", fontSize: "14px" }}> {firstLetter + " " + secondLetter} </Avatar>
    }

    const stringColor = (name) => {
        // get first alphabet in upper case
        const firstAlphabet = name.charAt(0).toLowerCase();

        // get the ASCII code of the character
        const asciiCode = firstAlphabet.charCodeAt(0);

        // number that contains 3 times ASCII value of character -- unique for every alphabet
        const colorNum = asciiCode.toString() + asciiCode.toString() + asciiCode.toString();

        var num = Math.round(0xffffff * parseInt(colorNum));
        var r = num >> 16 & 255;
        var g = num >> 8 & 255;
        var b = num & 255;

        return {
            color: 'rgb(' + r + ', ' + g + ', ' + b + ', 0.3)',
            character: firstAlphabet.toUpperCase()
        };
    }

    const userEditOption = (firstname, lastname, email, role, gender, password) => {
        setUserList(userList.map(item => {
            if (item.id === userId) {
                item['first_name'] = firstname;
                item['last_name'] = lastname;
                item['email'] = email;
                item['role'] = role;
                item['gender'] = gender;
                item['password'] = password
                return item;
            }
            return item;
        }))
        setOpen(false);
    }
    const handleAddPopup = () => {
        setOpenAdd(true)
    }
    const getNewUser = (users) => {
        userList.push(users)
        console.log('all users', userList);
    }
    const handleOpenDialog = (index) => {
        setOpenDialog(true);
        setUserIndex(index)
    }
    const handleFilerSearch = (e) => {
        setFilterSearch(e.target.value.substr(0, 20))
    }
    let filteredStates = userList.filter(
        (items) => {
            return items.first_name.toLowerCase().indexOf(filterSearch.toLowerCase()) !== -1
        }
    );
    const classes = useStyles();
    return (
        <div>
            <h3>Total Number of Users : {userList.length}</h3>

            <div>
                <Table
                    contents={filteredStates}
                    add={handleAddPopup}
                    edit={handleOpen}
                    delete={handleOpenDialog}
                    avator={handleAvator}
                    filterMethod={handleFilerSearch}
                />
            </div>
            <div>
                <DialogMui
                    open={openDialog}
                    close={handleCloseDialog}
                    delete={handleDelete}
                />
            </div>
            <div>
                <ModalMui
                    open={open}
                    close={handleClose}
                    content={<Edit
                        id={userId}
                        firstname={userFirstName}
                        lastname={userLastName}
                        email={userEmail}
                        gender={userGender}
                        password={userPassword}
                        update={userEditOption}
                        close={handleClose}
                    />}
                />
            </div>
            <div>
                <ModalMui
                    open={openAdd}
                    close={handleCloseAdd}
                    content={<Add
                        addNewUsers={getNewUser}
                        close={handleCloseAdd}
                    />}
                />
            </div>

        </div>
    )
}

export default withRouter(UserManagement);
