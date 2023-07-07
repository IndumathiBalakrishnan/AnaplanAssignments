import { render, screen, waitFor, fireEvent,act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "../App";
import Jobs from "./jobs";




describe("full app rendering/navigating", () => {
  
 1.  // Write test case to chekc if you click Jobs it gets routed to the page and find the test "List of jobs" on the page.
   test("click jobs,its gets routed to list of jobs page",()=>{



  render(
  
  <BrowserRouter>
  < App />
  </BrowserRouter>)  
const jobLink=screen.getByRole('link',{name:"Jobs"})
fireEvent.click(jobLink)
const listofjobs=screen.getByText("List of jobs")
expect(listofjobs).toBeInTheDocument()


   })

 2. //Write test case to chekc if you click Jobs it gets routed to the page and validate the search input box shows the same value that you enter.
  it("check search value in input box", async () => {
    render(
  
      <MemoryRouter initialEntries={['/jobs']}>
  
      < Jobs />
      </MemoryRouter>)
      // const jobsLink=screen.getByRole('link',{name:"Jobs"})
      // fireEvent.click(jobsLink)
      // await waitFor(()=>screen.getByText("List of jobs"))
      const searchInput=screen.getByLabelText("search-input")
      expect(searchInput).toBeInTheDocument();
      const searchvalue="Java Developer";
        fireEvent.change(searchInput, { target: { value: searchvalue } });
        await waitFor(()=>{
        expect(searchInput).toHaveValue(searchvalue);
       
        })
});
      });
    
    
    
      
     
