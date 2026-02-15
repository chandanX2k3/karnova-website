
import { withAuth } from "next-auth/middleware"

export default withAuth({
    pages: {
        signIn: "/admin/login",
    },
})

export const config = {
    matcher: [
        "/admin/:path*",
        // Add other protected routes here if needed
    ]
}
