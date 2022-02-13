import React, { Component, useEffect } from "react";
import { Check, ChevronDown, MoreHorizontal } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { me } from "../../store";
import { Disclosure } from "@headlessui/react";
import {
  difficultyLevels,
  lightLevels,
  sizes,
  types,
} from "../Admin/SingleInventoryForm";
import { useParams } from "react-router-dom";
import startCase from "lodash/startcase";

const StylizedProducts = () => {
  const dispatch = useDispatch();
  const params = useParams();

  return (
    <div>
      <div className="min-h-[100vh] bg-beige">
        <div className="min-h-[120vh] pt-28 p-20 max-w-7xl m-auto">
          <div className="flex justify-between">
            <div className="text-5xl">{startCase(params.type)}s</div>
            <select className="focus:outline-none block p-6 py-3  text-center rounded-full text-base font-bold bg-forest-green text-beige uppercase">
              <option value="">Sort by</option>
            </select>
          </div>
          <div className="grid grid-cols-4 m-auto h-full gap-5 my-5">
            <div className="col-span-1 bg-beige rounded-lg">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="text-xl font-medium flex justify-between w-full px-4 py-2 text-left border-b-2 border-forest-green focus:outline-none ">
                      <span>Type</span>
                      <ChevronDown
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-forest-green`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2">
                      {types.map((type) => (
                        <div
                          key={type}
                          className="flex items-center form-check mb-3"
                        >
                          <input
                            name={type}
                            type="checkbox"
                            value={type}
                            defaultChecked={false}
                            className=" appearance-none float-left bg-no-repeat bg-center bg-contain h-8 w-8 border-2 form-check-input rounded-lg border-forest-green text-white focus:outline-none checked:text-white checked:bg-forest-green "
                          />
                          <label
                            htmlFor={type}
                            className="ml-3 min-w-0 flex-1 text-lg"
                          >
                            {type}
                          </label>
                        </div>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="text-xl font-medium flex justify-between w-full px-4 py-2 text-left border-b-2 border-forest-green focus:outline-none ">
                      <span>Size</span>
                      <ChevronDown
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-forest-green`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 ">
                      {sizes.map((size) => (
                        <div
                          key={size}
                          className="flex items-center form-check mb-3"
                        >
                          <input
                            name={size}
                            type="checkbox"
                            value={size}
                            defaultChecked={false}
                            className="appearance-none float-left bg-no-repeat bg-center bg-contain h-8 w-8 border-2 form-check-input rounded-lg border-forest-green text-white focus:outline-none checked:text-white checked:bg-forest-green "
                          />
                          <label
                            htmlFor={size}
                            className="ml-3 min-w-0 flex-1 text-lg"
                          >
                            {size}
                          </label>
                        </div>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="text-xl font-medium flex justify-between w-full px-4 py-2 text-left border-b-2 border-forest-green focus:outline-none ">
                      <span>Light</span>
                      <ChevronDown
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-forest-green`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 ">
                      {lightLevels.map((light) => (
                        <div
                          key={light}
                          className="flex items-center form-check mb-3"
                        >
                          <input
                            name={light}
                            type="checkbox"
                            value={light}
                            defaultChecked={false}
                            className="appearance-none float-left bg-no-repeat bg-center bg-contain h-8 w-8 border-2 form-check-input rounded-lg border-forest-green text-white focus:outline-none checked:text-white checked:bg-forest-green "
                          />
                          <label
                            htmlFor={light}
                            className="ml-3 min-w-0 flex-1 text-lg"
                          >
                            {light}
                          </label>
                        </div>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="text-xl font-medium flex justify-between w-full px-4 py-2 text-left border-b-2 border-forest-green focus:outline-none ">
                      <span>Difficulty</span>
                      <ChevronDown
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-forest-green`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 ">
                      {difficultyLevels.map((difficulty) => (
                        <div
                          key={difficulty}
                          className="flex items-center form-check mb-3"
                        >
                          <input
                            name={difficulty}
                            type="checkbox"
                            value={difficulty}
                            defaultChecked={false}
                            className="appearance-none float-left bg-no-repeat bg-center bg-contain h-8 w-8 border-2 form-check-input rounded-lg border-forest-green text-white focus:outline-none checked:text-white checked:bg-forest-green "
                          />
                          <label
                            htmlFor={difficulty}
                            className="ml-3 min-w-0 flex-1 text-lg"
                          >
                            {difficulty}
                          </label>
                        </div>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="text-xl font-medium flex justify-between w-full px-4 py-2 text-left border-b-2 border-forest-green focus:outline-none ">
                      <span>Pet-friendly</span>
                      <ChevronDown
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-forest-green`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 ">
                      <div className="flex items-center form-check mb-3">
                        <input
                          name="petFriendly"
                          type="checkbox"
                          value={false}
                          defaultChecked={false}
                          className="appearance-none float-left bg-no-repeat bg-center bg-contain h-8 w-8 border-2 form-check-input rounded-lg border-forest-green text-white focus:outline-none checked:text-white checked:bg-forest-green "
                        />
                        <label
                          htmlFor="petFriendly"
                          className="ml-3 min-w-0 flex-1 text-lg"
                        >
                          Pet-friendly
                        </label>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="col-span-3 p-10 bg-beige rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylizedProducts;
