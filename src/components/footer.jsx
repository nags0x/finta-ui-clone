import React from "react";

const Fotter = () => {
    return(
        <>
            <div className="w-full ">
                <div className="flex justify-between items-center border-x-0 border-t-0 border border-stone-300 border-dashed py-5">
                        <div className="flex justify-center items-center gap-4">
                            <img src="src/assets/footer-logo.svg"/>
                            <div className="text-sm text-gray-900 font-medium">
                                Magically simplify accounting and taxes.
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <img src="src/assets/x.svg" />
                            <img src="src/assets/linkedin.svg" />
                            <img src="src/assets/y-combinator.svg" />
                        </div>
                </div>
                <div className="flex justify-between items-center pt-5 pb-20">
                    <div className="text-xs text-gray-500">
                        Copyright © Finta Platform Inc. All rights reserved.
                    </div>
                    <div className="flex items-center justify-center gap-4 text-xs text-gray-900">
                            <div>
                                Terms and conditions
                            </div>
                            <div>
                                Privacy policy
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Fotter;

