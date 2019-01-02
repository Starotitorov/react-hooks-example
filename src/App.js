import React, {Component, Suspense, lazy} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import CollapsibleText from './CollapsibleText';
import ErrorBoundary from './ErrorBoundary';
import { ConsoleLogger } from './logger';

const logger = new ConsoleLogger();

const Posts = lazy(() => import('./Posts'))

class App extends Component {
    render() {
        return (
            <ErrorBoundary logger={logger}>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <CollapsibleText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Vivamus finibus, dolor sed blandit venenatis,
                                libero neque convallis nulla, eu egestas ligula odio sed massa.
                                Cras nec est nec turpis ultrices lacinia. In a eros tortor.
                                Nam porttitor leo lacus, eu ultrices eros ultricies non.
                                Etiam convallis fermentum justo sed sollicitudin.
                                In euismod quam ac quam ullamcorper sagittis.
                                Proin porta sit amet sem at tempor. Cras lacinia rhoncus dolor,
                                volutpat pulvinar erat molestie venenatis.
                                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                Morbi non est sed diam auctor laoreet et non nisl. Phasellus id mauris gravida,
                                vulputate erat ut, posuere nisl. Sed id fringilla dui, sit amet condimentum purus.
                                Praesent a eros id erat scelerisque gravida eu vitae ante.
                                Nunc cursus sapien ex, nec imperdiet mauris sollicitudin eu.
                            </CollapsibleText>
                        </Col>
                        <Col xs={12}>
                            <Suspense fallback={<p>Loading module...</p>}>
                                <Posts />
                            </Suspense>
                        </Col>
                    </Row>
                </Container>
            </ErrorBoundary>
        );
    }
}

export default App;
