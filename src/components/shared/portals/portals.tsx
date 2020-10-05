import React, { ReactElement, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { PortalType } from './portals.constants';

interface IPortalContext {
  portalMap: Map<PortalType, ReactNode>;
  addPortalItem: (mapItem: [PortalType, ReactNode]) => void;
  removePortalItem: (portalType: PortalType) => void;
}

const PortalContext = React.createContext<IPortalContext>(null);

export const PortalProvider: React.FC = (props) => {
  const [portalMap, setPortal] = useState<Map<PortalType, ReactNode>>(new Map());

  const addPortalItem = useCallback((mapItem: [PortalType, ReactNode]) => {
    portalMap.set(...mapItem);

    const clonedMapWithNewItem = new Map(portalMap);

    setPortal(clonedMapWithNewItem);
  }, []);

  const removePortalItem = useCallback((portalType: PortalType) => {
    portalMap.delete(portalType);

    const clonedMapWithoutItem = new Map(portalMap);

    setPortal(clonedMapWithoutItem);
  }, []);

  return (
    <PortalContext.Provider value={{ portalMap, addPortalItem, removePortalItem }}>
      {props.children}
    </PortalContext.Provider>
  );
};

interface IProps {
  portType: PortalType;
}

export const InternalPortal: React.FC<IProps> = (props) => {
  const { addPortalItem, removePortalItem } = useContext(PortalContext);

  useEffect(() => {
    addPortalItem([props.portType, props.children]);

    return () => removePortalItem(props.portType);
  }, []);

  return null;
};

export const DisplayPortal: React.FC<IProps> = (props) => {
  const { portalMap } = useContext(PortalContext);

  return (portalMap.get(props.portType) as ReactElement) || null;
};
