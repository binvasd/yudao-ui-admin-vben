import type { VbenFormSchema } from '#/adapter/form';
import type { VxeTableGridOptions } from '#/adapter/vxe-table';
import type { DataAssetRegistryApi } from '#/api/data/dataassetregistry';

import { DICT_TYPE } from '@vben/constants';
import { getDictOptions } from '@vben/hooks';

import { getRangePickerDefaultProps } from '#/utils';

/** 新增/修改的表单 */
export function useFormSchema(): VbenFormSchema[] {
  return [
    {
      fieldName: 'id',
      component: 'Input',
      dependencies: {
        triggerFields: [''],
        show: () => false,
      },
    },
    {
      fieldName: 'layer',
      label: '数据层级',
      rules: 'required',
      component: 'Select',
      componentProps: {
        options: getDictOptions(DICT_TYPE.DMP_SCHEMA, 'string'),
        placeholder: '请选择数据层级',
      },
    },
    {
      fieldName: 'tableName',
      label: '表名',
      rules: 'required',
      component: 'Input',
      componentProps: {
        placeholder: '请输入表名',
      },
    },
    {
      fieldName: 'tableRemark',
      label: '表注释',
      component: 'Input',
      componentProps: {
        placeholder: '请输入表注释',
      },
    },
  ];
}

/** 列表的搜索表单 */
export function useGridFormSchema(): VbenFormSchema[] {
  return [
    {
      fieldName: 'layer',
      label: '数据层级',
      component: 'Select',
      componentProps: {
        allowClear: true,
        options: getDictOptions(DICT_TYPE.DMP_SCHEMA, 'string'),
        placeholder: '请选择数据层级',
      },
    },
    {
      fieldName: 'tableName',
      label: '表名',
      component: 'Input',
      componentProps: {
        allowClear: true,
        placeholder: '请输入表名',
      },
    },
    {
      fieldName: 'lastEtlTime',
      label: '最近一次成功ETL的完成时间',
      component: 'RangePicker',
      componentProps: {
        ...getRangePickerDefaultProps(),
        allowClear: true,
      },
    },
  ];
}

/** 列表的字段 */
export function useGridColumns(): VxeTableGridOptions<DataAssetRegistryApi.AssetRegistry>['columns'] {
  return [
  { type: 'checkbox', width: 40 },
    {
      field: 'id',
      title: '主键',
      minWidth: 120,
    },
    {
      field: 'layer',
      title: '数据层级',
      minWidth: 120,
      cellRender: {
        name: 'CellDict',
        props: { type: DICT_TYPE.DMP_SCHEMA },
      },
    },
    {
      field: 'tableName',
      title: '表名',
      minWidth: 120,
    },
    {
      field: 'tableRemark',
      title: '表注释',
      minWidth: 120,
    },
    {
      field: 'rowCount',
      title: '最近一次ETL后的行数',
      minWidth: 120,
    },
    {
      field: 'dataSizeMb',
      title: '占用磁盘空间（MB）',
      minWidth: 120,
    },
    {
      field: 'lastEtlTime',
      title: '最近一次成功ETL的完成时间',
      minWidth: 120,
      formatter: 'formatDateTime',
    },
    {
      field: 'creator',
      title: '创建人',
      minWidth: 120,
    },
    {
      field: 'updater',
      title: '更新人',
      minWidth: 120,
    },
    {
      field: 'deleted',
      title: '状态',
      minWidth: 120,
    },
    {
      field: 'createTime',
      title: '创建日期',
      minWidth: 120,
      formatter: 'formatDateTime',
    },
    {
      field: 'updateTime',
      title: '修改日期',
      minWidth: 120,
      formatter: 'formatDateTime',
    },
    {
      title: '操作',
      width: 200,
      fixed: 'right',
      slots: { default: 'actions' },
    },
  ];
}

// ==================== 子表（血缘） ====================

 /** 新增/修改的表单 */
export function useTableLineageFormSchema(): VbenFormSchema[] {
    return [
        {
            fieldName: 'id',
            component: 'Input',
            dependencies: {
                triggerFields: [''],
                show: () => false,
            },
        },
                         {
                            fieldName: 'sourceSchema',
                            label: '数据库名',
                                rules: 'required',
                                component: 'Select',
                                componentProps: {
                                        options: getDictOptions(DICT_TYPE.DMP_SCHEMA, 'string'),
                                    placeholder: '请选择数据库名',
                                },
                        },
                        {
                            fieldName: 'sourceTable',
                            label: '表名',
                                rules: 'required',
                                component: 'Input',
                                componentProps: {
                                    placeholder: '请输入表名',
                                },
                        },
    ];
}

/** 列表的搜索表单 */
export function useTableLineageGridFormSchema(): VbenFormSchema[] {
    return [
                {
                    fieldName: 'targetTableId',
                    label: '注册表主键',
                        component: 'Input',
                        componentProps: {
                            allowClear: true,
                            placeholder: '请输入注册表主键',
                        },
                },
                {
                    fieldName: 'sourceSchema',
                    label: '数据库名',
                        component: 'Select',
                        componentProps: {
                            allowClear: true,
                                options: getDictOptions(DICT_TYPE.DMP_SCHEMA, 'string'),
                            placeholder: '请选择数据库名',
                        },
                },
                {
                    fieldName: 'sourceTable',
                    label: '表名',
                        component: 'Input',
                        componentProps: {
                            allowClear: true,
                            placeholder: '请输入表名',
                        },
                },
    ];
}

/** 列表的字段 */
export function useTableLineageGridColumns(): VxeTableGridOptions<DataAssetRegistryApi.TableLineage>['columns'] {
    return [
            { type: 'checkbox', width: 40 },
                {
                    field: 'id',
                    title: '主键',
                    minWidth: 120,
                },
                {
                    field: 'targetTableId',
                    title: '注册表主键',
                    minWidth: 120,
                },
                {
                    field: 'sourceSchema',
                    title: '数据库名',
                    minWidth: 120,
                        cellRender: {
                            name: 'CellDict',
                            props: { type: DICT_TYPE.DMP_SCHEMA },
                        },
                },
                {
                    field: 'sourceTable',
                    title: '表名',
                    minWidth: 120,
                },
        {
            title: '操作',
            width: 200,
            fixed: 'right',
            slots: { default: 'actions' },
        },
    ];
}

