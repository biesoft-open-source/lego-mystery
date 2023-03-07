import { rebrickableAxiosInstance } from '../config';
import { rebrickableEndpoints } from '../constants';
import { SetNumber } from '../types';

export interface MinifigData {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: string;
}

export const getMinifig = async (setNumber: SetNumber) => {
  const { data } = await rebrickableAxiosInstance.get<MinifigData>(
    rebrickableEndpoints.minifig(setNumber)
  );

  return data;
};

interface MinifigsData {
  count: number;
  next: string;
  previous?: any;
  results: MinifigData[];
}

export const getMinifigs = async () => {
  const { data } = await rebrickableAxiosInstance.get<MinifigsData>(
    rebrickableEndpoints.minifigs
  );

  return data;
};

interface Color {
  id: number;
  name: string;
  rgb: string;
  is_trans: boolean;
  external_ids: Externalids2;
}

interface Externalids2 {
  BrickLink: BrickLink;
  BrickOwl: BrickLink;
  LEGO: BrickLink;
  Peeron: Peeron;
  LDraw: BrickLink;
}

interface Peeron {
  ext_ids: null[];
  ext_descrs: string[][];
}

interface BrickLink {
  ext_ids: number[];
  ext_descrs: string[][];
}

interface Part {
  part_num: string;
  name: string;
  part_cat_id: number;
  part_url: string;
  part_img_url: string;
  external_ids: Externalids;
  print_of?: string;
}

interface Externalids {
  BrickLink: string[];
  BrickOwl: string[];
  Brickset?: string[];
  LEGO?: string[];
  LDraw?: string[];
}

export interface PartsDataResult {
  id: number;
  inv_part_id: number;
  part: Part;
  color: Color;
  set_num: string;
  quantity: number;
  is_spare: boolean;
  element_id?: string;
  num_sets: number;
}

interface PartsData {
  count: number;
  next?: any;
  previous?: any;
  results: PartsDataResult[];
}

export const getParts = async (setNumber: SetNumber) => {
  const { data } = await rebrickableAxiosInstance.get<PartsData>(
    rebrickableEndpoints.parts(setNumber)
  );

  return data;
};
