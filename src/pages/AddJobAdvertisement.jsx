import { useFormik } from 'formik';
import React, { useState, useEffect } from 'react'
import bg1 from '../assets/images/page-title-1.jpg';
import WorkTypeService from '../services/workTypeService';
import WorkHourService from '../services/workHourService';
import CityService from '../services/cityService';
import JobPositionService from '../services/jobPositionService';
import JobAdvertisementService from '../services/jobAdvertisementService';
import * as Yup from 'yup';
import { Button, Card, Checkbox, Container, Form, Segment, TextArea } from 'semantic-ui-react';
import { toast } from 'react-toastify'

export default function AddJobAdvertisement() {

    let jobAdvertisementService = new JobAdvertisementService();

    const addJobAdvertisementValidationSchema = Yup.object({

        jobDescription: Yup.string().required("Bu alan boş bırakılamaz.").max(500, "En fazla 500 karakter girebilirsiniz."),
        cityId: Yup.string().required("Bu alan boş bırakılamaz."),
        jobPositionId: Yup.string().required("Bu alan boş bırakılamaz."),
        workTypeId: Yup.string().required("Bu alan boş bırakılamaz."),
        workHourId: Yup.string().required("Bu alan boş bırakılamaz."),
        minSalaryScale: Yup.number().required("Bu alan boş bırakılamaz.").min(0, "Lütfen 0'dan büyük bir değer giriniz."),
        maxSalaryScale: Yup.number().required("Bu alan boş bırakılamaz.").min(0, "Lütfen 0'dan büyük bir değer giriniz."),
        openPositionQuantity: Yup.number().required("Bu alan boş bırakılamaz.").min(0, "Lütfen 0'dan büyük bir değer giriniz."),
        applicationDeadline: Yup.date().required("Bu alan boş bırakılamaz."),
    });

    const { values, handleSubmit, handleChange, handleBlur, setFieldValue, resetForm, errors, touched } = useFormik({

        initialValues: {
            cityId: "",
            jobPositionId: "",
            employerId: "",
            workTypeId: "",
            workHourId: "",
            jobDescription: "",
            minSalaryScale: "",
            maxSalaryScale: "",
            openPositionQuantity: "",
            active: true,
            applicationDeadline: "",
        },
        validationSchema: addJobAdvertisementValidationSchema,
        onSubmit: (values) => {
            values.employerId = Number(35);
            // alert(JSON.stringify(values, null, 2));
            jobAdvertisementService.add(values)
                .then((response) => {
                    toast.success("İlanınız Başarıyla Eklendi.");
                    toast.info("İlanınız bizim onayımızdan sonra yayınlanacaktır!");
                    resetForm();
                }).catch((respError) => {
                    toast.error("İlan eklerken bir problem oluştu.")
                });
        },
    });

    const [workTypes, setworkTypes] = useState([]);
    const [workHours, setworkHours] = useState([]);
    const [cities, setcities] = useState([]);
    const [jobPositions, setjobPositions] = useState([]);

    useEffect(() => {
        let workTypeService = new WorkTypeService();
        let workHourService = new WorkHourService();
        let cityService = new CityService();
        let jobPositionService = new JobPositionService();

        workTypeService.getAll().then((response) => {
            setworkTypes(response.data.data);
        });

        workHourService.getAll().then((response) => { setworkHours(response.data.data) });

        cityService.getAll().then((response) => { setcities(response.data.data) });

        jobPositionService.getAll().then((response) => { setjobPositions(response.data.data) });

    }, []);

    const workTypesOption = workTypes?.map((workType, index) => ({
        key: index,
        text: workType.workType,
        value: workType.id
    }));

    const workHourOption = workHours.map((workHour, index) => ({
        key: index,
        text: workHour.workHour,
        value: workHour.id
    }));

    const cityOption = cities.map((city, index) => ({
        key: index,
        text: city.cityName,
        value: city.id
    }));

    const jobPositionOption = jobPositions.map((jobPosition, index) => ({
        key: index,
        text: jobPosition.jobName,
        value: jobPosition.id
    }));

    const handleChangeSemantic = (value, fieldName) => {
        setFieldValue(fieldName, value)
    }


    return (
        <div>
            <div className="page-top-area" style={{ background: `url(${bg1})` }}>
            </div>


            <Container className="my-5">
                <div className="row">
                    <div className="col-md-8 offset-md-2">

                        <Card style={{ width: "100%" }}>
                            <Card.Content className="header" >
                                <h1>İş İlanı Ekle</h1>
                            </Card.Content>

                            <Card.Content className="content">
                                <Form onSubmit={handleSubmit} >

                                    <Form.Field>
                                        <label>Şehir</label>
                                        <Form.Select
                                            id="cityId"
                                            name="cityId"
                                            placeholder="Lütfen seçiniz.."
                                            options={cityOption}
                                            value={values.cityId}
                                            onChange={(event, data) => handleChangeSemantic(data.value, 'cityId')}
                                        />
                                        {
                                            errors.cityId && touched.cityId && (
                                                <div className={"ui pointing red basic label"}>
                                                    {errors.cityId}
                                                </div>
                                            )
                                        }
                                    </Form.Field>

                                    <Form.Field>
                                        <label>İş Pozisyonu</label>
                                        <Form.Select
                                            id="jobPositionId"
                                            name="jobPositionId"
                                            placeholder="Lütfen seçiniz.."
                                            options={jobPositionOption}
                                            value={values.jobPositionId}
                                            onChange={(event, data) => handleChangeSemantic(data.value, 'jobPositionId')}
                                        />
                                        {
                                            errors.jobPositionId && touched.jobPositionId && (
                                                <div className={"ui pointing red basic label"}>
                                                    {errors.jobPositionId}
                                                </div>
                                            )
                                        }
                                    </Form.Field>

                                    <Form.Group widths='equal'>
                                        <Form.Field>
                                            <label>Min Maaş</label>
                                            <div className="ui labeled input">
                                                <label htmlFor="amount" className="ui label">$</label>
                                                <input
                                                    id="minSalaryScale"
                                                    name="minSalaryScale"
                                                    value={values.minSalaryScale}
                                                    onChange={handleChange}
                                                    placeholder="Min Maaş"
                                                    type='number' />


                                            </div>
                                            {
                                                errors.minSalaryScale && touched.minSalaryScale && (
                                                    <div className={"ui pointing red basic label"}>
                                                        {errors.minSalaryScale}
                                                    </div>
                                                )
                                            }

                                        </Form.Field>
                                        <Form.Field>
                                            <label>Max Maaş</label>
                                            <div className="ui labeled input">
                                                <label htmlFor="amount" className="ui label">$</label>
                                                <input
                                                    id="maxSalaryScale"
                                                    name="maxSalaryScale"
                                                    value={values.maxSalaryScale}
                                                    placeholder="Max Maaş"
                                                    onChange={handleChange}
                                                    type='number' />
                                            </div>
                                            {
                                                errors.maxSalaryScale && touched.maxSalaryScale && (
                                                    <div className={"ui pointing red basic label"}>
                                                        {errors.maxSalaryScale}
                                                    </div>
                                                )
                                            }
                                        </Form.Field>
                                    </Form.Group>

                                    <Form.Field>
                                        <label>Çalışma Türü</label>
                                        <Form.Select
                                            id="workTypeId"
                                            name="workTypeId"
                                            placeholder="Lütfen seçiniz.."
                                            options={workTypesOption}
                                            value={values.workTypeId}
                                            onChange={(event, data) => handleChangeSemantic(data.value, 'workTypeId')}
                                        />
                                        {
                                            errors.workTypeId && touched.workTypeId && (
                                                <div className={"ui pointing red basic label"}>
                                                    {errors.workTypeId}
                                                </div>
                                            )
                                        }
                                    </Form.Field>

                                    <Form.Field>
                                        <label>Çalışma Zaman Türü</label>
                                        <Form.Select
                                            id="workHourId"
                                            name="workHourId"
                                            placeholder="Lütfen seçiniz.."
                                            options={workHourOption}
                                            value={values.workHourId}
                                            onChange={(event, data) => handleChangeSemantic(data.value, 'workHourId')}
                                        />
                                        {
                                            errors.workHourId && touched.workHourId && (
                                                <div className={"ui pointing red basic label"}>
                                                    {errors.workHourId}
                                                </div>
                                            )
                                        }
                                    </Form.Field>

                                    <Form.Group widths='equal'>
                                        <Form.Field>
                                            <label>Açık Pozisyon Sayısı</label>
                                            <input
                                                type="number" name="openPositionQuantity" id="openPositionQuantity"
                                                value={values.openPositionQuantity}
                                                onChange={handleChange}
                                                placeholder="Açık Pozisyon Sayısı"
                                            />
                                            {
                                                errors.openPositionQuantity && touched.openPositionQuantity && (
                                                    <div className={"ui pointing red basic label"}>
                                                        {errors.openPositionQuantity}
                                                    </div>
                                                )
                                            }
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Son Başvuru Tarihi</label>
                                            <input type="date" name="applicationDeadline" id="applicationDeadline"
                                                value={values.applicationDeadline}
                                                onChange={handleChange}
                                            />
                                            {
                                                errors.applicationDeadline && touched.applicationDeadline && (
                                                    <div className={"ui pointing red basic label"}>
                                                        {errors.applicationDeadline}
                                                    </div>
                                                )
                                            }
                                        </Form.Field>
                                    </Form.Group>

                                    <Form.Field>
                                        <label>Açıklama</label>
                                        <TextArea
                                            id="jobDescription"
                                            name="jobDescription"
                                            onChange={handleChange}
                                            value={values.jobDescription}
                                            onBlur={handleBlur}
                                            placeholder="Açıklama"
                                        ></TextArea>
                                        {
                                            errors.jobDescription && touched.jobDescription && (
                                                <div className={"ui pointing red basic label"}>
                                                    {errors.jobDescription}
                                                </div>
                                            )
                                        }
                                    </Form.Field>

                                    <Card.Content className="extra">
                                        <Form.Field className="d-flex mt-3 mb-4">
                                            <Checkbox toggle
                                                id="active"
                                                name="active"
                                                onChange={() => setFieldValue('active', !values.active)}
                                                checked={values.active}
                                            />
                                            <label style={{ paddingLeft: "1rem" }} htmlFor="active">Paylaştığınız iş aktif olarak gözüksün mü?</label>
                                        </Form.Field>
                                        <Button fluid inverted color='violet' type="submit">
                                            Gönder
                                        </Button>
                                    </Card.Content>

                                </Form>
                            </Card.Content>

                        </Card>


                    </div>
                </div>

            </Container>

        </div>
    )
}
