import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

function EditEventPage() {
    return <>
        <MainNavigation />
        <main>
            <Outlet />
        </main>
    </>;
}

export default EditEventPage;