import Footer from "./Footer";
import NavBar from "./NavBar";
import React, {useState} from "react";

function SuggestionMajor() {

    const [page, setPage] = useState(1);
    const [score ,setScore] = useState([]);
    const Content = () => {
        if (page === 1) {
            return (
                <div className="page">
                    <div className="subject-radio">
                        <h4>ភាសាខ្មែរ</h4>
                        <div className="controls">
                            <label className="radio">
                                <input type="radio" name="khmer" value="0" />
                                0%
                            </label>
                            <label className="radio">
                                <input type="radio" name="khmer" value="25" />
                                25%
                            </label>
                            <label className="radio">
                                <input type="radio" name="khmer" value="50" checked={true}/>
                                50%
                            </label>
                            <label className="radio">
                                <input type="radio" name="khmer" value="75" />
                                75%
                            </label>
                            <label className="radio">
                                <input type="radio" name="khmer" value="100" />
                                100%
                            </label>
                        </div>
                    </div>
                    <div className="subject-radio">
                        <h4>ភាសាអង់គ្លេស</h4>
                        <div className="controls">
                            <label className="radio">
                                <input type="radio" name="english" value="0" />
                                0%
                            </label>
                            <label className="radio">
                                <input type="radio" name="english" value="25" />
                                25%
                            </label>
                            <label className="radio">
                                <input type="radio" name="english" value="50" checked={true}/>
                                50%
                            </label>
                            <label className="radio">
                                <input type="radio" name="english" value="75" />
                                75%
                            </label>
                            <label className="radio">
                                <input type="radio" name="english" value="100" />
                                100%
                            </label>
                        </div>
                    </div>
                    <div className="subject-radio">
                        <h4>គណិតវិទ្យា</h4>
                        <div className="controls">
                            <label className="radio">
                                <input type="radio" name="math" value="0" />
                                0%
                            </label>
                            <label className="radio">
                                <input type="radio" name="math" value="25" />
                                25%
                            </label>
                            <label className="radio">
                                <input type="radio" name="math" value="50" checked={true}/>
                                50%
                            </label>
                            <label className="radio">
                                <input type="radio" name="math" value="75" />
                                75%
                            </label>
                            <label className="radio">
                                <input type="radio" name="math" value="100" />
                                100%
                            </label>
                        </div>
                    </div>
                    <div className="subject-radio">
                        <h4>បច្ចេកវិទ្យាព័ត៌មាន</h4>
                        <div className="controls">
                            <label className="radio">
                                <input type="radio" name="it" value="0" />
                                0%
                            </label>
                            <label className="radio">
                                <input type="radio" name="it" value="25" />
                                25%
                            </label>
                            <label className="radio">
                                <input type="radio" name="it" value="50" checked={true}/>
                                50%
                            </label>
                            <label className="radio">
                                <input type="radio" name="it" value="75" />
                                75%
                            </label>
                            <label className="radio">
                                <input type="radio" name="it" value="100" />
                                100%
                            </label>
                        </div>
                    </div>
                </div>
            )
        } else if (page === 2) {
            return (
                <div className="page">
                    <div className="subject-radio">
                        <h4>រូបវិទ្យា</h4>
                        <div className="controls">
                            <label className="radio">
                                <input type="radio" name="physics" value="0" />
                                0%
                            </label>
                            <label className="radio">
                                <input type="radio" name="physics" value="25" />
                                25%
                            </label>
                            <label className="radio">
                                <input type="radio" name="physics" value="50" checked={true}/>
                                50%
                            </label>
                            <label className="radio">
                                <input type="radio" name="physics" value="75" />
                                75%
                            </label>
                            <label className="radio">
                                <input type="radio" name="physics" value="100" />
                                100%
                            </label>
                        </div>
                    </div>
                    <div className="subject-radio">
                        <h4>គីមីវិទ្យា</h4>
                        <div className="controls">
                            <label className="radio">
                                <input type="radio" name="chemistry" value="0" />
                                0%
                            </label>
                            <label className="radio">
                                <input type="radio" name="chemistry" value="25" />
                                25%
                            </label>
                            <label className="radio">
                                <input type="radio" name="chemistry" value="50" checked={true}/>
                                50%
                            </label>
                            <label className="radio">
                                <input type="radio" name="chemistry" value="75" />
                                75%
                            </label>
                            <label className="radio">
                                <input type="radio" name="chemistry" value="100" />
                                100%
                            </label>
                        </div>
                    </div>
                    <div className="subject-radio">
                        <h4>ជីវវិទ្យា</h4>
                        <div className="controls">
                            <label className="radio">
                                <input type="radio" name="biology" value="0" />
                                0%
                            </label>
                            <label className="radio">
                                <input type="radio" name="biology" value="25" />
                                25%
                            </label>
                            <label className="radio">
                                <input type="radio" name="biology" value="50" checked={true}/>
                                50%
                            </label>
                            <label className="radio">
                                <input type="radio" name="biology" value="75" />
                                75%
                            </label>
                            <label className="radio">
                                <input type="radio" name="biology" value="100" />
                                100%
                            </label>
                        </div>
                    </div>
                    <div className="subject-radio">
                        <h4>ផែនដី-បរិស្ថានវិទ្យា</h4>
                        <div className="controls">
                            <label className="radio">
                                <input type="radio" name="earth" value="0" />
                                0%
                            </label>
                            <label className="radio">
                                <input type="radio" name="earth" value="25" />
                                25%
                            </label>
                            <label className="radio">
                                <input type="radio" name="earth" value="50" checked={true}/>
                                50%
                            </label>
                            <label className="radio">
                                <input type="radio" name="earth" value="75" />
                                75%
                            </label>
                            <label className="radio">
                                <input type="radio" name="earth" value="100" />
                                100%
                            </label>
                        </div>
                    </div>
                </div>
            )
        } else if (page === 3) {
            return (
                <div className="page">
                    <div className="subject-radio">
                        <h4>ប្រវត្តិវិទ្យា</h4>
                        <div className="controls">
                            <label className="radio">
                                <input type="radio" name="history" value="0" />
                                0%
                            </label>
                            <label className="radio">
                                <input type="radio" name="history" value="25" />
                                25%
                            </label>
                            <label className="radio">
                                <input type="radio" name="history" value="50" checked={true}/>
                                50%
                            </label>
                            <label className="radio">
                                <input type="radio" name="history" value="75" />
                                75%
                            </label>
                            <label className="radio">
                                <input type="radio" name="history" value="100" />
                                100%
                            </label>
                        </div>
                    </div>
                    <div className="subject-radio">
                        <h4>ភូមិវិទ្យា</h4>
                        <div className="controls">
                            <label className="radio">
                                <input type="radio" name="geography" value="0" />
                                0%
                            </label>
                            <label className="radio">
                                <input type="radio" name="geography" value="25" />
                                25%
                            </label>
                            <label className="radio">
                                <input type="radio" name="geography" value="50" checked={true}/>
                                50%
                            </label>
                            <label className="radio">
                                <input type="radio" name="geography" value="75" />
                                75%
                            </label>
                            <label className="radio">
                                <input type="radio" name="geography" value="100" />
                                100%
                            </label>
                        </div>
                    </div>
                    <div className="subject-radio">
                        <h4>សីលធម៌-ពលរដ្ឋវិទ្យា</h4>
                        <div className="controls">
                            <label className="radio">
                                <input type="radio" name="morality" value="0" />
                                0%
                            </label>
                            <label className="radio">
                                <input type="radio" name="morality" value="25" />
                                25%
                            </label>
                            <label className="radio">
                                <input type="radio" name="morality" value="50" checked={true}/>
                                50%
                            </label>
                            <label className="radio">
                                <input type="radio" name="morality" value="75" />
                                75%
                            </label>
                            <label className="radio">
                                <input type="radio" name="morality" value="100" />
                                100%
                            </label>
                        </div>
                    </div>
                    <div className="subject-radio">
                        <h4>សេដ្ឋកិច្ចវិទ្យា</h4>
                        <div className="controls">
                            <label className="radio">
                                <input type="radio" name="economics" value="0" />
                                0%
                            </label>
                            <label className="radio">
                                <input type="radio" name="economics" value="25" />
                                25%
                            </label>
                            <label className="radio">
                                <input type="radio" name="economics" value="50" checked={true}/>
                                50%
                            </label>
                            <label className="radio">
                                <input type="radio" name="economics" value="75" />
                                75%
                            </label>
                            <label className="radio">
                                <input type="radio" name="economics" value="100" />
                                100%
                            </label>
                        </div>
                    </div>
                </div>
            )
        }
    }

    const Button = () => {
        if (page < 3) return <button id="next-btn" onClick={nextPage}>បន្ទាប់<i className="fa-solid fa-angles-right"></i></button>
        else return <button id="next-btn" onClick={nextPage}>បញ្ចប់</button>
    }
    function nextPage() {
        if (page < 3) setPage(page + 1);
        else {

        }
    }

    return (
        <React.Fragment>
            <NavBar />
            <section className="form-container">
                <form className="form">
                    <h3>សូមជ្រើសពិន្ទុជាមធ្យមដែលអ្នកទទួលបានពេលអ្នកសិក្សានៅថ្នាក់វិទ្យាល័យ</h3>
                    <Content />
                </form>
            </section>
            <section className="btn-prev-next-container">
                <button id="prev-btn"><i className="fa-solid fa-angles-left"></i>ថយក្រោយ</button>
                <Button />
            </section>
            <Footer />
        </React.Fragment>
    );
}
export default SuggestionMajor;
