import {HStack} from '../stack';
import {Text} from '../text';
import {css} from '@emotion/css';
import {map} from 'ramda';
import theme from '../theme';

type Tab<T> = {
  id: T;
  label: string;
};

type TabsProps<T> = {
  tabs: Tab<T>[];
  selectedTabId: T | null;
  onChange: (id: T) => void;
};

function Tabs<T extends string>(props: TabsProps<T>) {
  return (
    <menu
      className={css`
        margin: 0;
        padding: 0;
      `}
    >
      <HStack spacing={0} justify="space-between">
        {map(
          (tab) => (
            <button
              className={css`
                all: unset;
                display: block;
                flex: 1;
                border: 1px solid ${theme.colors.green};
                color: ${theme.colors.green};
                padding: ${theme.sizes['6']};
                text-align: center;
                cursor: pointer;

                ${props.selectedTabId === tab.id &&
                `
                  background-color: ${theme.colors.green};
                  color: ${theme.colors.neutral_100};
                `}
              `}
              key={`tab-${tab.id}`}
              onClick={() => props.onChange(tab.id)}
            >
              <Text variant="body">{tab.label}</Text>
            </button>
          ),
          props.tabs,
        )}
      </HStack>
    </menu>
  );
}

export default Tabs;
