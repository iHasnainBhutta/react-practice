PGDMP     6    0                {            mydb    14.2    14.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16394    mydb    DATABASE     c   CREATE DATABASE mydb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_Pakistan.1252';
    DROP DATABASE mydb;
                postgres    false            �            1259    16406    products    TABLE     �   CREATE TABLE public.products (
    p_id integer NOT NULL,
    product_name text NOT NULL,
    product_description text NOT NULL,
    product_category text,
    stock_quantity integer,
    image_url text,
    p_price integer
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    16405    products_p_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_p_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.products_p_id_seq;
       public          postgres    false    212            �           0    0    products_p_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.products_p_id_seq OWNED BY public.products.p_id;
          public          postgres    false    211            �            1259    16396    users    TABLE     �   CREATE TABLE public.users (
    user_id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    token text,
    verified boolean DEFAULT false
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16395    users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_user_id_seq;
       public          postgres    false    210            �           0    0    users_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;
          public          postgres    false    209            c           2604    16409    products p_id    DEFAULT     n   ALTER TABLE ONLY public.products ALTER COLUMN p_id SET DEFAULT nextval('public.products_p_id_seq'::regclass);
 <   ALTER TABLE public.products ALTER COLUMN p_id DROP DEFAULT;
       public          postgres    false    212    211    212            a           2604    16399    users user_id    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    209    210    210            �          0    16406    products 
   TABLE DATA           �   COPY public.products (p_id, product_name, product_description, product_category, stock_quantity, image_url, p_price) FROM stdin;
    public          postgres    false    212   �       �          0    16396    users 
   TABLE DATA           J   COPY public.users (user_id, email, password, token, verified) FROM stdin;
    public          postgres    false    210   =       �           0    0    products_p_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.products_p_id_seq', 4, true);
          public          postgres    false    211                        0    0    users_user_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.users_user_id_seq', 2, true);
          public          postgres    false    209            g           2606    16413    products products_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (p_id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    212            e           2606    16404    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    210            �   �   x�e��
�0E盯�.��%Q;꒩��Q(KѤ$�|�8.w8��%�!�4qe�P2���p�[���5>&���~ˍ2bI3��RJ�q�j��<�1��������&\��Ci#IR��I��xow�� �.�1��1�      �   u  x���Mo�@ ��5���0�®���u?�ܤ��R��Q�__�n���ݾ99�$���W�[Z^(�.� #M�W�F�#�?�u*��*o��#%	R��,�b�.Ahݦ�������<�3u�܅�j�-�|�Yp
�&<Z��<G=����_�����c�LN�-�����d�0�{/KU��eL�Xn���g+�����
Sq�f�.���X���(�n^� ��˶k���x�J��&5EB��_�p��l�?�i��	6ﵤ\�k�՝�:�Zz'����b�'����O��O�3
T��5Q���[��l���8�>C�h�-����֪$����zxylgAёw�n������}��B�VD���*�,�U��     