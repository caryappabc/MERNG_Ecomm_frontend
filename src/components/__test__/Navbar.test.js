import { render, screen, cleanup } from "@testing-library/react";
import Navbar from "../Navbar/Navbar.tsx";


describe("The Navbar component", ()=>{
    beforeEach(()=>{
        render(<Navbar/>);
    })
    afterEach(()=> cleanup());
    
    it("Should render", ()=>{
        expect(screen.getByTestId("Navbar_1"));
    })

    it("Should Contain the logo", ()=>{
        const logo = screen.getByTestId("Navbar_logo")
        expect(logo.alt).toContain("Heavy Metal Heaven")
    })
    it("nav items should have a href", ()=>{
        const linkEl = screen.getAllByRole('link');
        linkEl.map(link=>{
            expect(link).toHaveAttribute("href")
        })
    })
});