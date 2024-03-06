import { Disclosure } from "@headlessui/react";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { setUserToken } from "../../redux/actions";

const navigation = [{ name: "Dashboard", href: "/dashboard", current: true }, { name: "About Us", href: "/about-us", current: true }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const DefaultLayout = () => {

  const dispatch = useAppDispatch();

const handleLogout = ()=> {
  dispatch(setUserToken(''))
}

  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <button className="text-white" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </div>
      </Disclosure>

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;
