"use client"

import { ReactNode } from 'react';
import {EvaRecoilRoot} from "@springtree/eva-sdk-react-recoil";
export const EvaWrapper = ({children}: {children: ReactNode}) => (
    <div>
        <EvaRecoilRoot endpointUrl="https://api.rituals.test.eva-online.cloud">
            <div>
                {children}
            </div>
        </EvaRecoilRoot>
    </div>
)
