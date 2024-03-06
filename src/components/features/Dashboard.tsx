import React, { useEffect } from "react";
import { getUser } from "../../utils/api/dashboard";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setUserDetails } from "../../redux/actions";

export default function Dashboard() {
  const { user } = useAppSelector((state) => state.root.user);

  const dispatch = useAppDispatch();

  const id = Number(user.token.slice(user.token.length - 1));

  useEffect(() => {
    getUser(id).then((res) => dispatch(setUserDetails(res.data.data)));
  }, [dispatch, id]);

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Meet our leadership
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
                  vitae elementum enim vitae ullamcorper suspendisse.
                </p>
              </div>
              <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                <li key={user.userDetails.first_name}>
                  <div className="flex items-center gap-x-6">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={user.userDetails.avatar}
                      alt=""
                    />
                    <div>
                      <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                          {`${user.userDetails.first_name} ${user.userDetails.last_name}`}
                        </h3>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                          {user.userDetails.email}
                        </h3>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
