import React from "react";

const currentYear = new Date().getFullYear();

export default function FooterPara() {
    return <footer><p> All Copyrights © reserved to {currentYear} </p></footer>;
};
