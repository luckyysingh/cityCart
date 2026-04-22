import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "CityCart. - Admin",
    description: "CityCart. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
