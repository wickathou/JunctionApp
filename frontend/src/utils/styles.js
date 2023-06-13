import theme from 'junctionTheme'
import { makeStyles } from '@material-ui/core/styles'

const junctionStyle = makeStyles({
    w450: {
        maxWidth: '450px',
    },
    shadow1: {
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.16)',
    },
    border1: {
        borderRadius: '8px',
    },
    borderButton: {
        borderRadius: '30px',
    },
    textAlignStart: {
        textAlign: 'start',
    },
    pb2: {
        paddingBottom: theme.spacing(2),
    },
    p3: {
        padding: theme.spacing(3),
    },
    pxb3: {
        padding: theme.spacing(0, 3, 3),
    },
    fs0: {
        fontSize: theme.spacing(0),
    },
    fs0half: {
        fontSize: theme.spacing(0.5),
    },
    fs1: {
        fontSize: theme.spacing(1),
    },
    fs1half: {
        fontSize: theme.spacing(1.5),
    },
    fs2: {
        fontSize: theme.spacing(2),
    },
    fs2half: {
        fontSize: theme.spacing(2.5),
    },
    fs3: {
        fontSize: theme.spacing(3),
    },
    fs3half: {
        fontSize: theme.spacing(3.5),
    },
    fs4: {
        fontSize: theme.spacing(4),
    },
    fs4half: {
        fontSize: theme.spacing(4.5),
    },
    fs5: {
        fontSize: theme.spacing(5),
    },
    fs5half: {
        fontSize: theme.spacing(5.5),
    },
    fs6: {
        fontSize: theme.spacing(6),
    },
    fs6half: {
        fontSize: theme.spacing(6.5),
    },
    fs7: {
        fontSize: theme.spacing(7),
    },
    fs7half: {
        fontSize: theme.spacing(7.5),
    },
    fs8: {
        fontSize: theme.spacing(8),
    },
    fs8half: {
        fontSize: theme.spacing(8.5),
    },
    fs9: {
        fontSize: theme.spacing(9),
    },
    fs9half: {
        fontSize: theme.spacing(9.5),
    },
    fs10: {
        fontSize: theme.spacing(10),
    },
    cardNote: {
        fontSize: '18px',
    },
    m0: {
        margin: theme.spacing(0),
    },
    mhalf: {
        margin: theme.spacing(0.5),
    },
    m1: {
        margin: theme.spacing(1),
    },
    m1half: {
        margin: theme.spacing(1.5),
    },
    m2: {
        margin: theme.spacing(2),
    },
    m2half: {
        margin: theme.spacing(2.5),
    },
    m3: {
        margin: theme.spacing(3),
    },
    m3half: {
        margin: theme.spacing(3.5),
    },
    m4: {
        margin: theme.spacing(4),
    },
    m4half: {
        margin: theme.spacing(4.5),
    },
    m5: {
        margin: theme.spacing(5),
    },
    m5half: {
        margin: theme.spacing(5.5),
    },
    m6: {
        margin: theme.spacing(6),
    },
    m6half: {
        margin: theme.spacing(6.5),
    },
    m7: {
        margin: theme.spacing(7),
    },
    m7half: {
        margin: theme.spacing(7.5),
    },
    m8: {
        margin: theme.spacing(8),
    },
    m8half: {
        margin: theme.spacing(8.5),
    },
    m9: {
        margin: theme.spacing(9),
    },
    m9half: {
        margin: theme.spacing(9.5),
    },
    m10: {
        margin: theme.spacing(10),
    },
    displayFlex: {
        display: 'flex',
    },
    justifyContentStart: {
        justifyContent: 'flex-start',
    },
    justifyContentEnd: {
        justifyContent: 'flex-end',
    },
    justifyContentCenter: {
        justifyContent: 'center',
    },
    justifyContentSpaceBetween: {
        justifyContent: 'space-between',
    },
    justifyContentSpaceAround: {
        justifyContent: 'space-around',
    },
    justifyContentSpaceEvenly: {
        justifyContent: 'space-evenly',
    },
    alignItemsStart: {
        alignItems: 'flex-start',
    },
    alignItemsEnd: {
        alignItems: 'flex-end',
    },
    alignItemsCenter: {
        alignItems: 'center',
    },
    alignItemsBaseline: {
        alignItems: 'baseline',
    },
    alignItemsStretch: {
        alignItems: 'stretch',
    },
    alignContentStart: {
        alignContent: 'flex-start',
    },
    alignContentEnd: {
        alignContent: 'flex-end',
    },
    alignContentCenter: {
        alignContent: 'center',
    },
    alignContentSpaceBetween: {
        alignContent: 'space-between',
    },
    alignContentSpaceAround: {
        alignContent: 'space-around',
    },
    alignContentStretch: {
        alignContent: 'stretch',
    },
    displayGrid: {
        display: 'grid',
    },
    gridTemplateColumns: columnCount => ({
        gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
    }),
    // @ts-ignore
    gridColumnStart: start => ({
        gridColumnStart: start,
    }),
    // @ts-ignore
    gridColumnEnd: end => ({
        gridColumnEnd: end,
    }),
    gridColumnSpan: span => ({
        gridColumn: `span ${span}`,
    }),
    gridGap: gap => ({
        // @ts-ignore
        gridGap: theme.spacing(gap),
    }),
    // @ts-ignore
    gridRowStart: start => ({
        gridRowStart: start,
    }),
    // @ts-ignore
    gridRowEnd: end => ({
        gridRowEnd: end,
    }),
    gridRowSpan: span => ({
        gridRow: `span ${span}`,
    }),
    gridAutoFlowRow: {
        gridAutoFlow: 'row',
    },
    gridAutoFlowColumn: {
        gridAutoFlow: 'column',
    },
    gridAutoFlowDense: {
        gridAutoFlow: 'dense',
    },
    gridJustifyItemsStart: {
        justifyItems: 'start',
    },
    gridJustifyItemsEnd: {
        justifyItems: 'end',
    },
    gridJustifyItemsCenter: {
        justifyItems: 'center',
    },
    gridJustifyItemsStretch: {
        justifyItems: 'stretch',
    },
    gridAlignItemsStart: {
        alignItems: 'start',
    },
    gridAlignItemsEnd: {
        alignItems: 'end',
    },
    gridAlignItemsCenter: {
        alignItems: 'center',
    },
    gridAlignItemsStretch: {
        alignItems: 'stretch',
    },
})

export default junctionStyle
