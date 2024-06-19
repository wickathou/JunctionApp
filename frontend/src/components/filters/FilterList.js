import React, { useState, useCallback, useEffect } from 'react'

import { makeStyles } from '@mui/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import {
    List,
    Divider,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Badge,
} from '@mui/material'
import FilterListItem from 'components/filters/FilterListItem'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(theme => ({
    headingItem: {
        marginRight: theme.spacing(1),
    },
    badge: {
        right: -1 * theme.spacing(2),
        top: theme.spacing(1),
    },
    list: {
        width: '100%',
    },
}))
const FilterList = ({ activeItemKey, filters = [], onChange = () => {} }) => {
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false)
    const toggleExpanded = useCallback(() => setExpanded(!expanded), [expanded])
    const hasFilters = filters.length !== 0
    const { t } = useTranslation()

    useEffect(() => {
        setExpanded(false)
    }, [activeItemKey])

    const handleRemove = useCallback(
        index => {
            const newFilters = filters.filter((filter, idx) => {
                return idx !== index
            })
            onChange(newFilters)
        },
        [onChange, filters],
    )

    return (
        <Accordion
            disabled={!hasFilters}
            expanded={expanded}
            onChange={toggleExpanded}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
            >
                <Badge
                    color="primary"
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    badgeContent={filters.length}
                    classes={{ badge: classes.badge }}
                    showZero={false}
                >
                    <Typography color="textPrimary">
                        {t('Active_filters_')}
                    </Typography>
                </Badge>
            </AccordionSummary>
            <AccordionDetails>
                <List className={classes.list}>
                    {filters.map((filter, index) => (
                        <React.Fragment
                            key={filter.path + filter.type + filter.value}
                        >
                            {index !== 0 && <Divider />}
                            <FilterListItem
                                filter={filter}
                                onRemove={() => handleRemove(index)}
                            />
                        </React.Fragment>
                    ))}
                </List>
            </AccordionDetails>
        </Accordion>
    )
}

export default FilterList
