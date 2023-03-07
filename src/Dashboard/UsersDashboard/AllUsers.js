import React, { useEffect, useState } from 'react';

const AllUsers = () => {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        const url = `http://localhost:5000/orders`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])
    console.log(users);

    const emails = users.map(items => items.orderEmail);
    console.log(emails);
    const uniqueEmails = emails.filter((value, index, self) => self.indexOf(value) === index);
    console.log(uniqueEmails);
    const sortedEmails = uniqueEmails.sort();
    console.log(sortedEmails);


    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>All Users</h1>
            <div className='text-3xl font-semibold text-stone-900'>
                {
                    sortedEmails.map(email => <ol><li className='m-2 p-2'>{email}</li></ol>)
                }
            </div>
        </div>
    );
};

export default AllUsers;