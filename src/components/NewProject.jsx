import Input from "./Input";

export default function NewProject() {
    return <div>
        <menu>
            <li>
                <button>
                    Cancel
                </button>
            </li>
            <li>
                <button>
                    Save
                </button>
            </li>
        </menu>
        <div>
            <Input label="Title" />
            {/* Could set textarea = true but it's redundant */}
            <Input label="Description" textarea />
            <Input label="Due Date" />
        </div>
    </div>
}