import { Button } from "@/components/ui/button";


const StyleGuide = () => {
    return (
        <div className="container mx-auto min-h-28 bg-slate-900">
            <h1 className="text-4xl font-bold mb-4">Style Guide</h1>

            <h2 className="text-2xl font-bold mb-2">Typography</h2>
            <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <h2 className="text-2xl font-bold mb-2">Buttons</h2>
            <div className="space-x-4">
                <Button>Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="default">DEFAULT</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
            </div>

            <h2 className="text-2xl font-bold mb-2">Forms</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default StyleGuide;