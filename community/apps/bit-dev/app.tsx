import React, { useState } from 'react';
import loadable from '@loadable/component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from '@teambit/ui-foundation.ui.navigation.react-router.link';
import { Guides } from '@teambit/docs.ui.pages.guides';
import { RouterContextProvider } from '@teambit/base-react.navigation.router-context';
import { Header } from '@teambit/community.ui.header.header';
import { Homepage } from '@teambit/community.ui.pages.homepage';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { NotFound } from '@teambit/community.ui.pages.errors.not-found';
import { CommunityDocs } from '@teambit/docs.ui.community-docs';
import { WideColumn } from '@teambit/base-ui.layout.page-frame';
import { ComponentHighlighter } from '@teambit/react.ui.component-highlighter';
import { RoutingProvider } from '@teambit/base-ui.routing.routing-provider';
import { Footer, footerMock } from '@teambit/community.ui.footer.footer';
import { legacyRouting } from './legacy-routing';
import styles from './app.module.scss';

/**
 * Load pages dynamically to enable code splitting.
 */
const Plugins = loadable(() => import('@teambit/community.ui.pages.plugins'));

export function BitDevApp() {
  const [highlighting, setHighlighting] = useState(true)
  return (
    <RoutingProvider value={legacyRouting}>
      <RouterContextProvider Link={Link}>
        <ThemeCompositions>
          <ComponentHighlighter classes={{label: styles.label, frame: styles.frame }} placement="top" style={{ border: 'none' }} disabled={!highlighting}>
            <BrowserRouter>
              <Header highlighting={highlighting} setHighlighting={setHighlighting} />
              <Switch>
                <Route path="/docs">
                  <WideColumn>
                    <CommunityDocs />
                  </WideColumn>
                </Route>

                <Route path="/guides">
                  <WideColumn>
                    <Guides />
                  </WideColumn>
                </Route>
                <Route exact path="/plugins">
                  <Plugins />
                </Route>
                <Route exact path="/">
                  <Homepage />
                </Route>
                <Route component={NotFound} />
              </Switch>
              <WideColumn>
                <Footer categoryList={footerMock} />
              </WideColumn>
              {/* footer component */}
            </BrowserRouter>
          </ComponentHighlighter>
        </ThemeCompositions>
      </RouterContextProvider>
    </RoutingProvider>
  );
}
