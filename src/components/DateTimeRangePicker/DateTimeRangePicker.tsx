import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import StaticDateRangePicker from "@mui/lab/StaticDateRangePicker";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import i18n from "i18next";
import moment from "moment";
import ruLocale from "date-fns/locale/ru";
import enLocale from "date-fns/locale/en-US";

// @ts-ignore
import ReactInputDateMask from "react-input-date-mask";
import { DateTimeInput } from "./components/DateTimeInput/DateTimeInput";

// readme:
// npm i @date-io/date-fns@1.3.13 date-fns --save // version < 2is important

const localeMap = {
    en: enLocale,
    ru: ruLocale,
};

interface IDateTimeRangePickerProps {
    setDateValue(newValue: (Date | null)[]): void;
    value: Date[];
}

export const DateTimeRangePicker = (props: IDateTimeRangePickerProps) => {
    const initialLocaleState = i18n.language.toString() as "en" | "ru";
    const [locale, setLocale] =
        React.useState<keyof typeof localeMap>(initialLocaleState);
    const currentDate = moment().toDate();

    useEffect(() => {
        setLocale(initialLocaleState);
    }, [i18n.language]);

    function transformDateToDate(dateValue: string, value: Date | null) {
        const date = dateValue + " " + moment(value).format("HH:mm");
        return moment(date.replace(/(\d+).(\d+).(\d+)/, "$3/$2/$1")).toDate();
    }
    function setDateRangeValue(newValue: (Date | null)[]) {
        const value = newValue.map((val, index) => {
            if (index == 0) {
                const date =
                    moment(val).format("DD.MM.yyyy") +
                    " " +
                    moment(props.value[0]).format("HH:mm");
                return moment(
                    date.replace(/(\d+).(\d+).(\d+)/, "$3/$2/$1"),
                ).toDate();
            } else {
              return   transformDateToDate(moment(val).format("DD.MM.yyyy"), props.value[1])
            }
        });
        const result = newValue.map((value, index, array) => {
            if (index == 1 && value === null) {
                if (
                    moment(array[0]?.getTime()).format("DD.MM.yyyy") ===
                    moment(currentDate).format("DD.MM.yyyy")
                ) {
                    return currentDate;
                } else {
                    return   transformDateToDate(moment(array[0]).format("DD.MM.yyyy"), props.value[1])
                }
            }

            if (index === 1 && value) {
                if (
                    moment(array[1]?.getTime()).format("DD.MM.yyyy") ===
                    moment(currentDate).format("DD.MM.yyyy")
                ) {
                    return currentDate;
                } else {
                    return   transformDateToDate(moment(value).format("DD.MM.yyyy"), props.value[1])

                }
            } else {
                return   transformDateToDate(moment(array[0]).format("DD.MM.yyyy"), props.value[0])

            }
        });
        props.setDateValue(result);
    }

    return (
        <div>
            <LocalizationProvider
                dateAdapter={AdapterDateFns as any}
                locale={localeMap[locale]}
            >
                <div style={{ maxHeight: "350px" }}>
                    <StaticDateRangePicker
                        showDaysOutsideCurrentMonth
                        className={style.StaticDateRangePicker}
                        calendars={1}
                        displayStaticWrapperAs={"desktop"}
                        value={props.value as RangeInput<Date | null>}
                        onChange={(newValue) => {
                            setDateRangeValue(newValue);
                        }}
                        renderInput={() => <></>}
                    />
                </div>
                <div>
                    <FlexContainer
                        gap={"10px"}
                        margin={"0 auto"}
                        padding={"0 15px 15px"}
                        width={"290px"}
                        fDirection={"row"}
                    >
                        {props.value.map((value, index) => (
                            <DateTimeInput
                                onChange={(value) => {
                                    index === 0
                                        ? props.setDateValue([
                                              value,
                                              props.value[1],
                                          ])
                                        : props.setDateValue([
                                              props.value[0],
                                              value,
                                          ]);
                                }}
                                value={value}
                                key={index}
                            />
                        ))}
                    </FlexContainer>
                </div>
            </LocalizationProvider>
        </div>
    );
};
