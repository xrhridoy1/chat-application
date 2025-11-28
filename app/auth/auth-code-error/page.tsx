export default function AuthCodeErrorPage() {
    return (
        <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-red-600">Login Failed</h1>
            <p className="mt-4 text-gray-700">Something went wrong. Please try again.</p>
            <a href="/login" className="text-blue-500 underline mt-6 block">Go back to login</a>
        </div>
    )
}
