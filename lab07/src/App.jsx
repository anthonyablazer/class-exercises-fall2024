import React from "react";
import Profile from "./Profile.jsx";
import ButtonCount from "./ButtonCount.jsx";

export default function App() {
    const people = [
        {
            "name": "Anita",
            "image_url": "https://picsum.photos/id/216/100/100"
        },
        {
            "name": "Ben",
            "image_url": "https://picsum.photos/id/217/100/100"
        },
        {
            "name": "Adwaina",
            "image_url": "https://picsum.photos/id/218/100/100"
        },
        {
            "name": "Laciesha",
            "image_url": "https://picsum.photos/id/219/100/100"
        }
    ];

    function getProfileComponents() {
        return people.map((item) => {
            return <Profile name={item.name} picture={item.image_url} />;
        });
    }

    return (
        <>
            <header>
                <h1>My First App</h1>
            </header>
            <main>
                <p>Hello React!</p>
                {/* expressions are embedded in curly braces in JSX */}
                {getProfileComponents()}
            </main>
            <ButtonCount initialValue={12} />
            <ButtonCount initialValue={40} />
            <ButtonCount initialValue={8} />
            <ButtonCount initialValue={3} />
            <ButtonCount initialValue={333} />
            <ButtonCount />
        </>
    );
}