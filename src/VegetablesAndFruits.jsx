import React from "react";


function VegetablesAndFruits() {

    const potatoes = 'Potatoes';
    const amountNewPotatoes = '6500Kg';
    const amountOldPotatoes = '1500Kg'
    const lastYearProduction = ' (last year production)';
    const thisYearProduction = ' (this year production)';

    const cucumbers = 'Cucumbers';
    const amountCucumbers = '1500Kg';

    const tomatoes = 'Tomatoes';
    const amountSpanishTomatoes = 'Spanish tomatoes 800Kg';
    const amountCherryTomatoes = 'Cherry tomatoes 700Kg';
    const amountYellowTomatoes = 'Yellow tomatoes 400Kg';
    const amountBlackTomatoes = 'Black tomatoes 280KG';

    const orange = 'Orange';
    const amountOrange = '200Kg';

    return (
        <div>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <img src="images/potatoes.jpeg" class="border border-dark rounded me-2 custom-image" alt="potatoes" /><h4>{potatoes}</h4>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body bg-dark">
                            <div class="text-center mt-5">
                                <button type="button" class="btn btn-primary" id="potatoBtn"><img src="images/potatoes.jpeg" class="rounded me-2 custom-image-small" alt="potatoes" />Display Stocks</button>
                            </div>
                            <div class="d-flex justify-content-center align-items-center w-100 p-3">
                                <div id="livePotatoToast" class="toast bg-secondary position-relative  text-white" role="alert" aria-live="assertive" aria-atomic="true">
                                    <div class="toast-header text-white bg-primary border-0">
                                        <img src="images/potatoes.jpeg" class="rounded me-2 custom-image-small" alt="potatoes" />
                                        <strong class="me-auto">Potatoes</strong>
                                        <small>{new Date().toLocaleString()}</small>
                                        <button type="button" class="btn-close custom-btn" data-bs-dismiss="toast" aria-label="Close"></button>
                                    </div>
                                    <div class="toast-body">
                                        <ul class="ul_custom">
                                            <li class="li_custom"><h6><img src="images/potatoes.jpeg" class="rounded me-2 custom-image-extra-small" alt="potatoes" />{amountNewPotatoes + thisYearProduction}</h6></li>
                                            <li class="li_custom"><h6><img src="images/potatoes.jpeg" class="rounded me-2 custom-image-extra-small" alt="potatoes" />{amountOldPotatoes + lastYearProduction}</h6></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <img src="images/cucumbers.jpeg" class="rounded me-2 custom-image" alt="cucumbers" /><h4>{cucumbers}</h4>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body bg-dark">
                            <div class="text-center mt-5">
                                <button type="button" class="btn btn-primary" id="cucumbersBtn"><img src="images/cucumbers.jpeg" class="rounded me-2 custom-image-small" alt="cucumbers" />Display Stocks</button>
                            </div>
                            <div class="d-flex justify-content-center align-items-center w-100 p-3">
                                <div id="liveCucumbersToast" class="toast bg-secondary position-relative text-white" role="alert" aria-live="assertive" aria-atomic="true">
                                    <div class="toast-header text-white bg-primary border-0">
                                        <img src="images/cucumbers.jpeg" class="rounded me-2 custom-image-small" alt="cucumbers" />
                                        <strong class="me-auto">Cucumbers</strong>
                                        <small>{new Date().toLocaleString()}</small>
                                        <button type="button" class="btn-close custom-btn" data-bs-dismiss="toast" aria-label="Close"></button>
                                    </div>
                                    <div class="toast-body">
                                        <ul class="ul_custom">
                                            <li class="li_custom"><h6><img src="images/cucumbers.jpeg" class="rounded me-2 custom-image-extra-small" alt="cucumbers" />{amountCucumbers}</h6></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <img src="images/tomato.jpeg" class="rounded me-2 custom-image" alt="tomato" /><h4>{tomatoes}</h4>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body bg-dark">
                            <div class="text-center mt-5">
                                <button type="button" class="btn btn-primary" id="tomatoesBtn"><img src="images/tomato.jpeg" class="rounded me-2 custom-image-small" alt="tomatoes" />Display Stocks</button>
                            </div>
                            <div class="d-flex justify-content-center align-items-center w-100 p-3">
                                <div id="liveTomatoesToast" class="toast bg-secondary position-relative text-white" role="alert" aria-live="assertive" aria-atomic="true">
                                    <div class="toast-header text-white bg-primary border-0">
                                        <img src="images/tomato.jpeg" class="rounded me-2 custom-image-small" alt="tomatoes" />
                                        <strong class="me-auto">Tomatoes</strong>
                                        <small>{new Date().toLocaleString()}</small>
                                        <button type="button" class="btn-close custom-btn" data-bs-dismiss="toast" aria-label="Close"></button>
                                    </div>
                                    <div class="toast-body">
                                        <ul class="ul_custom">
                                            <li class="li_custom"><h6><img src="images/tomato.jpeg" class="rounded me-2 custom-image-extra-small" alt="tomatoes" />{amountSpanishTomatoes}</h6></li>
                                            <li class="li_custom"><h6><img src="images/cherry-tomato.jpeg" class="rounded me-2 custom-image-extra-small" alt="cherry-tomatoes" />{amountCherryTomatoes}</h6></li>
                                            <li class="li_custom"><h6><img src="images/yellow-tomato.jpeg" class="rounded me-2 custom-image-extra-small" alt="yellow-tomatoes" />{amountYellowTomatoes}</h6></li>
                                            <li class="li_custom"><h6><img src="images/black-tomato.jpg" class="rounded me-2 custom-image-extra-small" alt="black-tomatoes" />{amountBlackTomatoes}</h6></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item mb-5">
                    <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <img src="images/orange.jpeg" class="rounded me-2 custom-image" alt="orange" /><h4>{orange}</h4>
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body bg-dark">
                            <div class="text-center mt-5">
                                <button type="button" class="btn btn-primary" id="orangeBtn"><img src="images/orange.jpeg" class="rounded me-2 custom-image-small" alt="orange" />Display Stocks</button>
                            </div>
                            <div class="d-flex justify-content-center align-items-center w-100 p-3">
                                <div id="liveOrangeToast" class="toast bg-secondary position-relative text-white" role="alert" aria-live="assertive" aria-atomic="true">
                                    <div class="toast-header text-white bg-primary border-0">
                                        <img src="images/orange.jpeg" class="rounded me-2 custom-image-small" alt="orange" />
                                        <strong class="me-auto">Orange</strong>
                                        <small>{new Date().toLocaleString()}</small>
                                        <button type="button" class="btn-close custom-btn" data-bs-dismiss="toast" aria-label="Close"></button>
                                    </div>
                                    <div class="toast-body">
                                        <ul class="ul_custom">
                                            <li class="li_custom"><h6><img src="images/orange.jpeg" class="rounded me-2 custom-image-small" alt="orange" />{amountOrange}</h6></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default VegetablesAndFruits;