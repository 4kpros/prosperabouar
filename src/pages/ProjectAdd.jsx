import { useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';



const ProjectAdd = () => {
    const modules = {
        'toolbar': [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image', 'video'],
            ['clean']
        ],
    }
    
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]
    const [value, setValue] = useState(
        '<br/><h1>Nouveau projet ici !</h1><br/><br/><br/><br/><br/><br/><br/>'
        );
    var styles = {
        color: "black"
    }
    return (
        <div className="w-full text-white">
            <div className="w-full max-w-screen-xl h-screen mx-auto px-4">
                <div className="w-full min-h-screen flex flex-col justify-center items-center lg:space-y-8">
                    <h1 className="text-center text-2xl font-bold  mb-12">
                        Ajout d'un nouveau projet
                    </h1>
                    <div className="w-full lg:w-1/2 bg-white text-black">
                        <ReactQuill
                            theme="snow"
                            value={value}
                            onChange={setValue}
                            modules={modules}
                            formats={formats}
                            placeholder="Content goes here..."
                            />
                    </div>
                    <div className="pt-8">
                        <button type="submit" value="Send" className="text-xl text-black font-bold bg-my-orage-color px-8 py-2.5 text-center focus:outline-none">
                            Enregistrer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectAdd;