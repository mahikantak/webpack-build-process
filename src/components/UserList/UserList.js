import React from 'react';

import classes from './user.css';
import UserLogo from '../../assets/user.png';

const AllUserList = (props) => (
    <div className={classes.wrapper}>
 
        <div className={classes.ImgWrapper}>
            <img src={UserLogo} className={classes.userImg} />
        
        <p>
            Mahendra Pal
        </p>
        </div>
    <div className={classes.ImgWrapper}>
        <img src={UserLogo} className={classes.userImg} />
    
        <p>Nitesh Gupta</p>
        </div>

</div>
);

export default AllUserList;


