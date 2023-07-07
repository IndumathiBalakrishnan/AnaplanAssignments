import { render, screen } from "@testing-library/react";
import Footer from "./footer";
//Kept the import as hint

// Write test case to find the anchor tag Home and check if it has url as 'http://localhost:3000/#' (hint: use getByRole() method)

describe("check the footer works", () => {
    test(" rendering anchor tag with correct url",()=>{
render(< Footer />)

const homeurl=screen.getByRole("link",{name:'Home'})
expect(homeurl).toHaveAttribute('href','http://localhost:3000/#')


    })
   
});
